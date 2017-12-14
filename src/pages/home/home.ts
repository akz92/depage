import { Component } from "@angular/core";
import { AlertController, NavController, ToastController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// Plugins
import { Clipboard } from "@ionic-native/clipboard";

// Providers
import { SecretGeneratorProvider } from "../../providers/secret-generator/secret-generator";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  public form: FormGroup;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController,
    public clipboard: Clipboard,
    public secretGenerator: SecretGeneratorProvider,
  ) {}

  public ngOnInit(): void {
    this._initForm();
  }

  public generateSecret(): void {
    if (!this._validForm()) { return; }


    let secret = this.secretGenerator.generate(this.form.value);
    let alert = this.alertCtrl.create({
      title: "Secret",
      subTitle: `The secret is: ${secret}`,
      buttons: [
        {
          text: "Cancel"
        },
        {
          text: "Copy",
          handler: () => {
            let toast = this.toastCtrl.create({
              message: "Copied secret to clipboard!",
              duration: 3000
            });

            this.clipboard.copy(secret);
            alert.dismiss().then(() => {
              toast.present();
            });
          }
        }
      ]
    });

    this.form.reset();
    alert.present();
  }

  private _initForm(): void {
    this.form = this.formBuilder.group({
      username: ["", Validators.required],
      service: ["", Validators.required],
      passphrase: ["", Validators.required],
      counter: [0, Validators.required],
    });
  }

  private _validForm(): boolean {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key).markAsTouched();
    });

    return this.form.valid;
  }
}
