import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../../../core/services/data.service';
import { CommonModule, JsonPipe } from '@angular/common';
import { UserHomeComponent } from "../user-home/user-home.component";

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, JsonPipe, UserHomeComponent],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {

  selectedFile: File | null = null;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private http: HttpClient, private userService: DataService) {}


  check: any;

  // Handle file selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    
    if (file) {
      this.selectedFile = file;
  
      // Display the selected image preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImage = e.target.result;  // Store image preview data
      };
      reader.readAsDataURL(file); 
  
      const userToken = localStorage.getItem('userToken');
      this.check = userToken; 
      console.log('User token:', userToken);  
    }
  }
  
  // Upload function to handle file selection and upload
  uploadImage() {
    if (!this.selectedFile) {
      console.error('No file selected');
      return;
    }

    const formObj = new FormData();
    formObj.append('file', this.selectedFile);  // Append the selected file
    
    const userToken = localStorage.getItem('userToken');
    if (userToken) {
      formObj.append('userId', userToken);  // Append the user token to the form data
    } else {
      console.error('User token is not available in localStorage');
      return;
    }

    // Call the service method to upload the file
    this.userService.uploadFile(formObj).subscribe({
      next: (response) => {
        console.log('Response:', response);  // Log the successful response
      },
      error: (error) => {
        console.error('Error:', error);  // Log the error if something goes wrong
      },
      complete: () => {
        console.log('File uploaded successfully');  // Log completion
      }
    });
  }



// export class UserProfileComponent {

//   selectedFile: File | null = null;
//   selectedImage: string | ArrayBuffer | null = null;

// constructor(private http: HttpClient,
//             private userService: DataService
// ) {}


// check : any

//   onFileSelected(event: any) {
//     const file = event.target.files[0];
    
//     if (file) {
//       this.selectedFile = file;
  
//       const reader = new FileReader();
//       reader.onload = (e: any) => {
//         this.selectedFile = e.target.result;
//       };
//       reader.readAsDataURL(file); 
  
//       const userToken = localStorage.getItem('userToken');
//       this.check = userToken; 
//       console.log('User token:', userToken);  
//     }
//   }
  



  
  
// // uploadImage function to handle the file selection and upload
// uploadImage() {
//   if (!this.selectedFile) {
//     console.error('No file selected');
//     return;
//   }

//   const formObj = new FormData();
//   formObj.append('file', this.selectedFile);  // Append the selected file
  
//   const userToken = localStorage.getItem('userToken');
//   if (userToken) {
//     formObj.append('userId', userToken);  // Append the user token to the form data
//   } else {
//     console.error('User token is not available in localStorage');
//     return;
//   }

//   // Call the service method to upload the file
//   this.userService.uploadFile(formObj).subscribe({
//     next: (response) => {
//       console.log('Response:', response);  // Log the successful response
//     },
//     error: (error) => {
//       console.error('Error:', error);  // Log the error if something goes wrong
//     },
//     complete: () => {
//       console.log('File uploaded successfully');  // Log completion
//     }
//   });
// }




  // uploadImage() {
  //   if (!this.selectedFile) {
  //     console.error('No file selected');
  //     return;
  //   }

  //   const formObj = new FormData();
  //   formObj.append('file', this.selectedFile);
  //   // console.log(formObj.get('file')) //---------------------------------
    
   
  //   const userToken = localStorage.getItem('userToken'); 
  //       if (userToken) {
  //           formObj.append('userId', userToken);
  //       } else {
  //           console.error('User token is not available in localStorage');
  //       }

  //   this.userService.uploadFile(formObj).subscribe({
  //     next: (v) => console.log('Response:', v),
  //     error: (e) => console.error('Error:', e),
  //     complete: () => console.log('File uploaded successfully')
  //   });
  // }






}
  





 
  


