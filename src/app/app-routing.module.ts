import { NgModule } from "@angular/core";
import { WelcomeComponent } from "./home/welcome.component";
import { PageNotFoundComponent } from "./page-not-found.component";
import { PreloadAllModules, RouterModule } from "@angular/router";
import { AuthGuard } from "./user/auth.guard";
import { SelectiveStrategy } from "./selective-strategy.service";

const ROUTES: any[] = [
    { path: 'welcome', component: WelcomeComponent },
    {
        path: 'products',
        canActivate: [AuthGuard],
        data: { preload: false },
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
    },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES, { preloadingStrategy: SelectiveStrategy })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}