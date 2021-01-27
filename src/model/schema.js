import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'services',
      columns: [
        {name: 'name', type: 'string'},
        {name: 'created_at', type: 'number'},
      ],
    }),
    tableSchema({
      name: 'types_services',
      columns: [
        {name: 'service_id', type: 'string', isIndexed: true},
        {name: 'name', type: 'string'},
        {name: 'price', type: 'string'},
        {name: 'created_at', type: 'number'},
      ],
    }),
  ]
})

