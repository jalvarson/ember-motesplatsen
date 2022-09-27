import Route from '@ember/routing/route';

export default class FeedRoute extends Route {
  model() {
    const feedPosts = [
      {
        feedType: '[PresentationText]',
        name: 'Estelle',
        isVip: true,
        avatarUrl:
          'https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
      },
      {
        feedType: '[CoverImage]',
        name: 'Johanna',
        avatarUrl:
          'https://images.unsplash.com/photo-1617200785733-6237c87c9ece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
      },
      {
        feedType: '[Interests]',
        name: 'Angelica',
        isVip: true,
        avatarUrl:
          'https://images.unsplash.com/photo-1530577197743-7adf14294584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1781&q=80',
      },
      {
        feedType: '[Profilephoto]',
        name: 'Christina',
        avatarUrl:
          'https://images.unsplash.com/photo-1560329072-17f59dcd30a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1682&q=80',
      },
      {
        feedType: '[LastLogIn]',
        name: 'Susanne',
        isVip: true,
        avatarUrl:
          'https://images.unsplash.com/photo-1561828970-daff2303fe58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80',
      },
    ];

    return { feedPosts };
  }
}
