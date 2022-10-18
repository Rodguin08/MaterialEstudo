import { Transferencia } from "../models/transferencia.model.js";
import { TransferenciaService } from './../services/transferencia.service';
import { HttpClient } from '@angular/common/http';
import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>()

  valor: number = 123
  destino: number = 321

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      // this.limparCampos()
      this.router.navigateByUrl("extrato")
    },
    error => console.error(error))

    this.aoTransferir.emit(valorEmitir)

    // this.limparCampos()
  }

  limparCampos() {
    this.valor = 0
    this.destino = 0
  }
}
