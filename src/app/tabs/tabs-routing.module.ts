import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'explore',
        loadChildren: () =>
          import('../explore/explore.module').then((m) => m.ExplorePageModule),
      },
      {
        path: 'add-photo',
        loadChildren: () =>
          import('../add-photo/add-photo.module').then(
            (m) => m.AddPhotoPageModule
          ),
      },
      {
        path: 'messages',
        loadChildren: () =>
          import('../messages/messages.module').then(
            (m) => m.MessagesPageModule
          ),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../account/account.module').then((m) => m.AccountPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
