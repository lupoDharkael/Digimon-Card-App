import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISave } from '../../../models';

@Component({
  selector: 'digimon-user-stats',
  template: `
    <div
      class="surface-card flex w-full flex-col border border-slate-200 p-4 text-[#e2e4e6] md:flex-row"
    >
      <div class="flex flex-row">
        <img
          class="my-auto mr-2 h-full w-auto rounded-full text-xs font-semibold text-[#e2e4e6]"
          *ngIf="save"
          alt="{{ save.displayName ?? 'Username not Found' }}"
          src="{{ save.photoURL }}"
        />
        <div class="vertical-align my-auto text-center text-2xl font-bold">
          {{ save?.displayName ?? 'User' }}
        </div>
      </div>

      <div class="hidden w-full flex-row justify-center md:flex">
        <div class="flex flex-col">
          <digimon-collection-circle
            [collection]="save?.collection ?? []"
            [type]="'BT'"
            class="mx-2"
          ></digimon-collection-circle>
          <label class="text-center">BT</label>
        </div>
        <div class="flex flex-col">
          <digimon-collection-circle
            [collection]="save?.collection ?? []"
            [type]="'EX'"
            class="mx-2"
          ></digimon-collection-circle>
          <label class="text-center">EX</label>
        </div>
        <div class="flex flex-col">
          <digimon-collection-circle
            [collection]="save?.collection ?? []"
            [type]="'ST'"
            class="mx-2"
          ></digimon-collection-circle>
          <label class="text-center">ST</label>
        </div>
        <div class="flex flex-col">
          <digimon-collection-circle
            [collection]="save?.collection ?? []"
            [type]="'P'"
            class="mx-2"
          ></digimon-collection-circle>
          <label class="text-center">P</label>
        </div>
      </div>

      <!--button
        class="surface-ground hover:primary-background text-shadow border border-black px-1 font-bold text-[#e2e4e6]"
      >
        Collection
      </button-->
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatsComponent {
  @Input() save: ISave | null;
}
