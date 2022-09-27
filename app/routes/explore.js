import Route from '@ember/routing/route';

export default class ExploreRoute extends Route {
  model() {
    const userProfiles = [
      {
        feedType: '[PresentationText]',
        age: 33,
        city: 'Varberg',
        name: 'Estelle',
        avatarUrl:
          'https://images.unsplash.com/photo-1530047198515-516ff90fc4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA3N3x8d29tYW4lMjBtYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[CoverImage]',
        age: 42,
        city: 'Varberg',
        name: 'Johanna',
        avatarUrl:
          'https://images.unsplash.com/photo-1617200785733-6237c87c9ece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
      },
      {
        feedType: '[Interests]',
        age: 36,
        city: 'Varberg',
        name: 'Angelica',
        avatarUrl:
          'https://images.unsplash.com/photo-1530577197743-7adf14294584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80',
      },
      {
        feedType: '[Profilephoto]',
        age: 38,
        city: 'Varberg',
        name: 'Christina',
        avatarUrl:
          'https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1682&q=80',
      },
      {
        feedType: '[LastLogIn]',
        age: 32,
        city: 'Varberg',
        name: 'Susanne',
        avatarUrl:
          'https://images.unsplash.com/photo-1561828970-daff2303fe58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
      },
      {
        feedType: '[LastLogIn]',
        age: 41,
        city: 'Varberg',
        name: 'Erika',
        avatarUrl:
          'https://images.unsplash.com/photo-1598550880863-4e8aa3d0edb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 37,
        city: 'Varberg',
        name: 'Rebecca',
        avatarUrl:
          'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI1fHx3b21hbiUyMG1hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 34,
        city: 'Varberg',
        name: 'Sophie',
        avatarUrl:
          'https://images.unsplash.com/photo-1594756154841-ac5d160dbf46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njl8fHdvbWFuJTIwc21pbGluZ3xlbnwwfDF8MHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 39,
        city: 'Varberg',
        name: 'Madeleine',
        avatarUrl:
          'https://images.unsplash.com/photo-1621074548293-a8dcb840aaf5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA4fHx3b21hbiUyMHNtaWxpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 29,
        city: 'Varberg',
        name: 'Anna-Karin',
        avatarUrl:
          'https://images.unsplash.com/photo-1605524287421-1545cd3f0505?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzA5fHx3b21hbiUyMHNtaWxpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 33,
        city: 'Varberg',
        name: 'Sandra',
        avatarUrl:
          'https://images.unsplash.com/photo-1623446678887-2b29d51fdee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDIxfHx3b21hbiUyMHNtaWxpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 40,
        city: 'Varberg',
        name: 'Johanna',
        avatarUrl:
          'https://images.unsplash.com/photo-1623864653909-0104b412f75d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDMyfHx3b21hbiUyMHNtaWxpbmd8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 34,
        city: 'Varberg',
        name: 'Charlotta',
        avatarUrl:
          'https://images.unsplash.com/photo-1613689284023-265a790729b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjUwfDM2Nzg5MDJ8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 31,
        city: 'Varberg',
        name: 'Josefine',
        avatarUrl:
          'https://images.unsplash.com/photo-1548382131-e0ebb1f0cdea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MjYwfDM2Nzg5MDJ8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 30,
        city: 'Varberg',
        name: 'Sonja',
        avatarUrl:
          'https://images.unsplash.com/photo-1568923066121-fb6216cf26f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTgyfDM2Nzg5MDJ8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 38,
        city: 'Varberg',
        name: 'Maja',
        avatarUrl:
          'https://images.unsplash.com/photo-1555363947-041407c0af48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8ODQ5fDM2Nzg5MDJ8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 37,
        city: 'Varberg',
        name: 'Olivia',
        avatarUrl:
          'https://images.unsplash.com/photo-1628890923662-2cb23c2e0cfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxnbERhZnJGS1gxRXx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 35,
        city: 'Varberg',
        name: 'Vera',
        avatarUrl:
          'https://images.unsplash.com/photo-1498163641090-1df07c039069?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzF8MjIxOTQ0NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 40,
        city: 'Varberg',
        name: 'Alice',
        avatarUrl:
          'https://images.unsplash.com/photo-1525186492356-0fe09a5831df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NTJ8MjIxOTQ0NHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60',
      },
      {
        feedType: '[LastLogIn]',
        age: 38,
        city: 'Varberg',
        name: 'Lena',
        avatarUrl:
          'https://images.unsplash.com/photo-1504275490777-45f30792f13f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAxOXx8d29tYW4lMjBtYXR1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
      },
    ];

    return { userProfiles };
  }
}