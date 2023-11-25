import { InterfaceArchivoService } from './interface-archivo.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PdfDescargableService implements InterfaceArchivoService {
  constructor(private http: HttpClient) {}

  descargar() {
    const os = require('os');
    const path = require('path');

    const rutaDescargas = path.join(os.homedir(), 'Downloads');
    const url = rutaDescargas;
    this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
      const urlDescarga = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = urlDescarga;
      a.download = 'CV.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(urlDescarga);
      a.remove();
    });
  }
}
