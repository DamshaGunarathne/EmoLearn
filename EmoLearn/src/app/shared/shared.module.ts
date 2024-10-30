import { CommonModule } from '@angular/common';
import { MenuModule } from 'primeng/menu';
import { NgModule, isDevMode } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { CheckboxModule } from 'primeng/checkbox';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';
import { TableModule } from 'primeng/table';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MessagesModule } from 'primeng/messages';
import { TooltipModule } from 'primeng/tooltip';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {BlockUIModule} from 'primeng/blockui';
import { StepsModule } from 'primeng/steps';
import {CalendarModule} from 'primeng/calendar';
import {MultiSelectModule} from 'primeng/multiselect';
import {FileUploadModule} from 'primeng/fileupload';
import {InputTextModule} from 'primeng/inputtext';
import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { TreeSelectModule } from 'primeng/treeselect';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { MainMenuComponent } from './layouts';

@NgModule({
  declarations: [
    MainMenuComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    AvatarModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    DialogModule,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    BadgeModule,
    DropdownModule,
    ToastModule,
    OverlayPanelModule,
    TableModule,
    RadioButtonModule,
    InputTextareaModule,
    ScrollPanelModule,
    PanelMenuModule,
    MessagesModule,
    TooltipModule,
    BreadcrumbModule,
    BlockUIModule,
    StepsModule,
    BlockUIModule,
    CalendarModule,
    MultiSelectModule,
    FileUploadModule,
    InputTextModule,
    PanelMenuModule,
    InputTextareaModule,
    ScrollPanelModule,
    RadioButtonModule,
    TabViewModule,
    AccordionModule,
    PdfViewerModule,
    TabViewModule,
    NgxDocViewerModule,
    ConfirmDialogModule,
    ConfirmDialogModule,
    TreeSelectModule,
    PaginatorModule,
    PasswordModule
  ],
  exports: [
    CommonModule,
    MenuModule,
    ButtonModule,
    AvatarModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    DialogModule,
    FormsModule,
    CheckboxModule,
    ReactiveFormsModule,
    BadgeModule,
    DropdownModule,
    ToastModule,
    OverlayPanelModule,
    TableModule,
    RadioButtonModule,
    InputTextareaModule,
    ScrollPanelModule,
    PanelMenuModule,
    TooltipModule,
    BreadcrumbModule,
    BlockUIModule,
    StepsModule,
    BlockUIModule,
    CalendarModule,
    MultiSelectModule,
    FileUploadModule,
    InputTextModule,
    PanelMenuModule,
    InputTextareaModule,
    ScrollPanelModule,
    RadioButtonModule,
    TabViewModule,
    AccordionModule,
    ConfirmDialogModule,
    TabViewModule,
    TreeSelectModule,
    PaginatorModule,
    PasswordModule,
    MainMenuComponent
  ],
  providers: [
    MessageService,
    ConfirmationService,
  ]
})
export class SharedModule {}
