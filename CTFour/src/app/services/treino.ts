
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Treino {
  exercicios = signal([
    'Supino inclinado',
    'Mergulho paralelas',
    'Desenvolvimento',
    'Crucifixo máquina',
    'Elevação lateral',
    'Tríceps pulley'
  ]);

  listarExercicios() {
    return this.exercicios;
  }

  adicionarExercicio(nome: string) {
    this.exercicios.update(lista => [...lista, nome]);
  }

  removerExercicio(nome: string) {
  this.exercicios.update(lista =>
    lista.filter(exercicio => exercicio !== nome)
  );
}

editarExercicio(nomeAntigo: string, nomeNovo: string) {
  this.exercicios.update(lista =>
    lista.map(exercicio =>
      exercicio === nomeAntigo ? nomeNovo : exercicio
    )
  );
}

}
