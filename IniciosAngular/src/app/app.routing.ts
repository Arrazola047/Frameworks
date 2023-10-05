// Importar los modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Importar componentes a los cuales les quiero hacer una página exclusiva
import { HomeComponent } from "./Components/home/home.component";
import { BlogComponent } from "./Components/blog/blog.component";
import { FormularioComponent } from "./Components/formulario/formulario.component";
import { PaginaComponent } from "./Components/pagina/pagina.component";
import { PeliculasComponent } from "./Components/peliculas/peliculas.component";
import { ErrorComponent } from "./Components/error/error.component";

// Definimos un Array de rutas
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'formulario', component: FormularioComponent},
    {path: 'peliculas', component: PeliculasComponent},
    {path: 'pagina-de-pruebas', component: PaginaComponent},
    {path: 'pagina-de-pruebas/:nombre/:apellido', component: PaginaComponent},
    {path: '**', component: ErrorComponent}
];

// Exportar el modulo de rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);