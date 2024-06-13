import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { KafkaExampleComponent } from './kafka/kafka.component';
export const routes: Routes = [
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: ListComponent },
    { path: 'update', component: UpdateComponent },
    { path: 'add', component: UpdateComponent },
    { path: 'get', component: KafkaExampleComponent }

    ];