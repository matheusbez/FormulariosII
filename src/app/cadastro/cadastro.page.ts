import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  registerForm: FormGroup;

  constructor(public formbuilder: FormBuilder,
              public toastController: ToastController) {

    this.registerForm = this.formbuilder.group ({
      name: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]],
      phone: [null, [Validators.required]],
      starterPokemon: [null, [Validators.required]]
    });
  }

  async presentToast() {
  const toast = await this.toastController.create({
    message: 'Cadastro realizado com sucesso! :)',
    duration: 2000
  });
  toast.present();
}

  ngOnInit() {
  }

  submitForm(form) {
    console.log(form);
    console.log(form.value);
    this.presentToast();
  }
}
