import { Injectable } from '@angular/core';
import { IEncryptionData } from "../../interfaces/encryption-data";

// 3rd Party
import * as CryptoJS from "crypto-js";

@Injectable()
export class SecretGeneratorProvider {
  generate(encryptionData: IEncryptionData): string {
    let encryptionText: string = `${encryptionData.username}:${encryptionData.passphrase}:${encryptionData.counter}:${encryptionData.service}`;
    return CryptoJS.SHA256(encryptionText).toString(CryptoJS.enc.Base64).replace(/[^0-9A-Za-z]/g, '').substring(0, 12).match(/.{3}/g).join('-');
  }
}
