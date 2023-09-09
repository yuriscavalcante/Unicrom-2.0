import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { presentToast } from 'src/app/components/shared/toast';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.loginForm.valid) {
      (await presentToast('Teste', 1500, 'bottom', 'success')).present();
    } else {
      (
        await presentToast(
          'Email e/ou senha invalidos',
          1500,
          'bottom',
          'danger'
        )
      ).present();
    }
  }
}
