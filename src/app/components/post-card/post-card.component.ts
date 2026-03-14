import { Component, computed, input } from '@angular/core';
import { TagComponent } from "../tag/tag.component";
import { ArrowRightOutlineIconComponent } from "@dimaslz/ng-heroicons";
import { PostCardInfo } from './post-card-type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-post-card',
  imports: [TagComponent, ArrowRightOutlineIconComponent, RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.css'
})
export class PostCardComponent {

  postInfo = input.required<PostCardInfo>();

  formattedDate = computed(() => {
    const asDate = new Date(this.postInfo().createdAt);

    const dia = asDate.getDate().toString().padStart(2, '0');
    const mes = (asDate.getMonth() + 1).toString().padStart(2, '0');
    const ano = asDate.getFullYear();
    const horas = asDate.getHours().toString().padStart(2, '0');
    const minutos = asDate.getMinutes().toString().padStart(2, '0');

    return `${dia}/${mes}/${ano} ${horas}:${minutos}`;
  })
}
