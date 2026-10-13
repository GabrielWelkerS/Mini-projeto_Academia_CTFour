import { Component, inject } from '@angular/core';
import { Treino } from '../../services/treino';

@Component({
  imports: [],
  selector: 'app-treinos',
  styleUrl: './treinos.css',
  templateUrl: './treinos.html',
})
export class Treinos {
  private treinoService = inject(Treino);

  exercicios = this.treinoService.listarExercicios();

  remover(nome: string) {
  this.treinoService.removerExercicio(nome);
}
}
