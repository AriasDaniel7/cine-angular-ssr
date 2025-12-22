import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'shared-icon',
  imports: [],
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Icon {
  icon = input.required<string>();
  iconClass = input<string>('w-4 h-4');
}
