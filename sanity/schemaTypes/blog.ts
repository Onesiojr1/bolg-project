export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
    },
    {
      name: 'smallDescription',
      type: 'text',
      title: 'Small Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
      ],
    },
  ],
}