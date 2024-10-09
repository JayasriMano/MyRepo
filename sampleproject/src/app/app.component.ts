import { CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,CommonModule, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sampleproject';
  form!: FormGroup;
  data: any[]=[];
  indexId: any;
 
  sortDirection: string = 'asc';

  constructor(private fb: FormBuilder) {
    var str = 'INDIA';
    var reversedStr = '';
   
   for (var i = str.length - 1; i >= 0; i--) {
       reversedStr += str[i];
   }
   
   console.log(reversedStr,"gfghdfty");
  }

  ngOnInit() {
    this.form = this.fb.group({
      // id: new FormControl(''),
      name: new FormControl('',Validators.required),
      age: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      phone: new FormControl('',Validators.required),
    });
    // this.httpclient.get('https://jsonplaceholder.typicode.com/users').subscribe((res:any) =>{
    //   this.data = res
    // })
    console.log('jfdsjhdfs')
  }
  onSubmit(){
    if(this.form.valid){
      if(this.indexId != null){
        this.data[this.indexId] = this.form.value
        this.indexId = null;
        this.form.reset();
      }else{
        this.data.push(this.form.value);
        this.form.reset();
      }
    }else{
      alert('Enter required field')
    }
  }

  // sortData(column: keyof typeof this.sortDirection) {
  //   debugger
  //   this.sortDirection[column] = !this.sortDirection[column]; // Toggle the sorting direction

  //   if (column === 'name') {
  //     this.data.sort((a, b) => {
  //       const nameA = a.name.toLowerCase();
  //       const nameB = b.name.toLowerCase();
  //       if (nameA < nameB) return this.sortDirection.name ? -1 : 1;
  //       if (nameA > nameB) return this.sortDirection.name ? 1 : -1;
  //       return 0;
  //     });
  //   }
  
  // }

  // sortData(){

  //   this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
  //   this.data.sort((a, b) => {
  //     const nameA = a.name.toLowerCase();
  //     const nameB = b.name.toLowerCase();

  //     if (nameA < nameB) {
  //       return this.sortDirection === 'asc' ? -1 : 1;
  //     }
  //     if (nameA > nameB) {
  //       return this.sortDirection === 'asc' ? 1 : -1;
  //     }
  //     return 0; // names are equal
  //   });
  // }


  sortData(){
    this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
    this.data.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if(nameA < nameB) return this.sortDirection == 'asc' ? -1 : 1;
      if(nameA > nameB) return this.sortDirection == 'asc' ? 1 : -1;
return 0;
    })
  }

  onEdit(event : any,index: any){

this.indexId = index
console.log(event,"event",this.indexId);
// this.form.controls['id'].setValue(this.indexId)
this.form.patchValue(event);
  }

  onDelete(index: number) {
    this.data.splice(index, 1);
  }

}
