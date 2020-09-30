import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AdminStoreDataService } from '../../../_services/admin-store-data.service';
import { Observable, Subscription } from 'rxjs';
import { finalize, switchMap, tap } from 'rxjs/operators';
import { FileExtentionValidator } from 'src/app/_modules/fileupload/file-validators';
import { AlertService } from 'src/app/services/alert.service';
import { SearchQueryGeneratorComponent } from 'src/app/views/shared/components/search-query-generator/search-query-generator.component';

@Component({
  selector: 'app-store-shell',
  templateUrl: './store-shell.component.html',
  styleUrls: ['./store-shell.component.scss']
})
export class StoreShellComponent implements OnInit, AfterViewInit {
  importComplete: boolean = true;

  stores: Array<{ store_id: number, store_name: string, status: string }>;

  constructor(private adminStoreData: AdminStoreDataService,
    private alertService: AlertService
  ) { }

  @ViewChild('queryGen', { read: SearchQueryGeneratorComponent }) queryGen: SearchQueryGeneratorComponent
  querySubs: Subscription;

  ngOnInit(): void {
    this.adminStoreData.storeShellAllStores().subscribe(stores => this.stores = stores);
  }

  ngAfterViewInit(): void {
    this.querySubs = this.queryGen.query.pipe(
      tap(() => this.stores = null),
      switchMap((val) => this.adminStoreData.storeShellAllStores(val))).subscribe(
        stores => this.stores = stores
      )
  }



  //file upload
  validFileFormats = ['.zip'];
  csvFileValidators = [FileExtentionValidator(this.validFileFormats)];

  handleFileUpload(file: File) {
    this.importComplete = false;
    this.adminStoreData.importCSV(file).pipe(
      switchMap(() => this.adminStoreData.storeShellAllStores()
      )
    ).subscribe(stores => this.stores = stores);
  }

  handleFileError(err: string) {
    this.alertService.showNotification(err);
  }
}