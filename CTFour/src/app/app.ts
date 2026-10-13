import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Treino } from './services/treino';
import { FormsModule } from '@angular/forms';
import { Treinos } from './pages/treinos/treinos';

@Component({
  imports: [RouterOutlet, FormsModule, Treinos],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('CTFour');

  private treinoService = inject(Treino);

  exercicios = this.treinoService.listarExercicios();

  
novoExercicio = '';

adicionar() {
  const nome = this.novoExercicio.trim();

  if (nome) {
    this.treinoService.adicionarExercicio(nome);
    this.novoExercicio = '';
  }
}

remover(nome: string) {
  this.treinoService.removerExercicio(nome);
}

editar(nomeAntigo: string, nomeNovo: string) {
  this.treinoService.editarExercicio(nomeAntigo, nomeNovo);
}

exercicioEditando: string | null = null;
novoNomeExercicio = '';

iniciarEdicao(nome: string) {
  this.exercicioEditando = nome;
  this.novoNomeExercicio = nome;
}

salvarEdicao() {
  const nomeNovo = this.novoNomeExercicio.trim();

  if (this.exercicioEditando && nomeNovo) {
    this.editar(this.exercicioEditando, nomeNovo);
    this.exercicioEditando = null;
    this.novoNomeExercicio = '';
  }
}

}
