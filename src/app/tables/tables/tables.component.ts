import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { UploadService } from 'src/app/upload.service';
import { FileUploader, FileLikeObject } from 'ng2-file-upload';
import { concat } from 'rxjs';
// import * as XLSX from 'xlsx';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  DJANGO_SERVER = 'http://127.0.0.1:8000';
  form: FormGroup;
  response;
  imageURL;
  public uploader: FileUploader = new FileUploader({});
  public hasBaseDropZoneOver = false;
  // data: AOA = [[1, 2], [3, 4]];
  // wopts: XLSX.writingOptions
  /*public exportAsExcelFile(json: any[], excelFileName: string): void {
    const worksheet: XLSX.worksheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.workbook = { Sheets: { 'data': worksheet}, sheetName: ['data']};
    const excelBuffer: any = XLSX.write(workbook, {booktype: 'xlsx', type: 'buffer'});
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }*/
  fileOverBase(event): void {  // method gets called when a file is dragged over the drop area
    this.hasBaseDropZoneOver = event;
  }
  getFiles(): FileLikeObject[] { // return the array of files in the uploader queue
    return this.uploader.queue.map((fileItem) => {
      return fileItem.file;
    });
  }
  upload() {   // method actually upload the files to the Django server using HttpClient and FormData
    const files = this.getFiles(); // get an array of all the selected and dropped files
    console.log(files);
    const requests = [];

    /* Next, we loop over the files array.*/
    files.forEach((file) => {
      const formData = new FormData();
      formData.append('file', file.rawFile, file.name);
      requests.push(this.uploadService.upload(formData)); // push the returned Observable to the requests array
    });

    /* to concatenate all returned Observables and
    subscribe to each one of them sequentially to send multiple POST requests to the server.*/
    concat(...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('profile').setValue(file);
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.form.get('profile').value);

    this.uploadService.upload(formData).subscribe(
      (res) => {
        this.response = res;
        this.imageURL = `${this.DJANGO_SERVER}${res.file}`;
        console.log(res);
        console.log(this.imageURL);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  constructor(private formBuilder: FormBuilder, private uploadService: UploadService, private http: HttpClient) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      profile: ['']
    });
  }

}
