// modules
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProjectRoutingModule } from './project-routing.module';
import { SharedModule } from 'app/shared/shared.module';

// components
import { ComplianceComponent } from './compliance/compliance.component';
import { IndigenousNationsComponent } from './indigenous-nations/indigenous-nations.component';
import { MilestonesComponent } from './milestones/milestones.component';
import { ProjectAddEditComponent } from './project-add-edit/project-add-edit.component';
import { ProjectAsideComponent } from './project-aside/project-aside.component';
import { ProjectContactsComponent } from './project-contacts/project-contacts.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { ProjectUpdatesComponent } from './project-updates/project-updates.component';
import { ValuedComponentsComponent } from './valued-components/valued-components.component';
import { CommentPeriodDetailsTabComponent } from './comment-period/comment-period-details-tabs/comment-period-details-tab.component';
import { ReviewCommentsTabComponent } from './comment-period/review-comments-tab/review-comments-tab.component';
import { ValuedComponentTableRowsComponent } from './valued-components/valued-component-table-rows/valued-component-table-rows.component';
import { DocumentTableRowsComponent } from './project-documents/project-document-table-rows/project-document-table-rows.component';
import { CommentPeriodsTableRowsComponent } from './comment-periods/comment-periods-table-rows/comment-periods-table-rows.component';
import { CommentPeriodsComponent } from './comment-periods/comment-periods.component';
import { ProjectDocumentsComponent } from './project-documents/project-documents.component';
import { CommentPeriodComponent } from './comment-period/comment-period.component';
import { MatTabsModule } from '@angular/material';
import { UploadComponent } from './project-documents/upload/upload.component';
import { AddLabelComponent } from './project-documents/add-label/add-label.component';
import { ReviewCommentsTabTableRowsComponent } from './comment-period/review-comments-tab/review-comments-tab-table-rows/review-comments-tab-table-rows.component';
import { DocumentDetailComponent } from './project-documents/detail/detail.component';
import { CreateCommentPeriodComponent } from './comment-periods/create-comment-period/create-comment-period.component';

// services
import { ApiService } from 'app/services/api';
import { ExcelService } from 'app/services/excel.service';
import { ProjectService } from 'app/services/project.service';
import { StorageService } from 'app/services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    NgxPaginationModule,
    MatTabsModule,
    ProjectRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommentPeriodComponent,
    ComplianceComponent,
    DocumentTableRowsComponent,
    IndigenousNationsComponent,
    MilestonesComponent,
    ProjectAddEditComponent,
    ProjectAsideComponent,
    ProjectContactsComponent,
    ProjectDetailComponent,
    ProjectUpdatesComponent,
    CommentPeriodsComponent,
    CommentPeriodsTableRowsComponent,
    ValuedComponentsComponent,
    ValuedComponentTableRowsComponent,
    ProjectDocumentsComponent,
    CommentPeriodDetailsTabComponent,
    ReviewCommentsTabComponent,
    UploadComponent,
    AddLabelComponent,
    ReviewCommentsTabTableRowsComponent,
    DocumentDetailComponent,
    CreateCommentPeriodComponent
  ],
  entryComponents: [
    CommentPeriodComponent,
    CommentPeriodsComponent,
    CommentPeriodsTableRowsComponent,
    ValuedComponentTableRowsComponent,
    DocumentTableRowsComponent,
    UploadComponent,
    ReviewCommentsTabTableRowsComponent
  ],
  exports: [
    ComplianceComponent,
    IndigenousNationsComponent,
    MilestonesComponent,
    ProjectAddEditComponent,
    ProjectAsideComponent,
    ProjectContactsComponent,
    ProjectDetailComponent,
    ProjectUpdatesComponent,
    ValuedComponentsComponent
  ],
  providers: [
    ApiService,
    ExcelService,
    ProjectService,
    StorageService
  ]
})

export class ProjectModule { }
