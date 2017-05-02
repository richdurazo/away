import { Routes, RouterModule } from "@angular/router";

import { MessagesComponent } from "./messages/messages.component";




const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'profile', component: MessagesComponent },

];

export const routing = RouterModule.forRoot(APP_ROUTES);
