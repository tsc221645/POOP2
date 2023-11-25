import { InterfazArchivo } from './interface-archivo.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordDescargableService implements InterfazArchivo {
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
      a.download = 'documento.docx'; // Nombre del archivo descargado
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(urlDescarga);
      a.remove();
    });
  }
}
