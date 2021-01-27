import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './schema'
import TypesServices from './TypesServices';
import Services from './Services';

const adapter = new SQLiteAdapter({
  schema,
  dbName: 'servicesApp', 
})

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    TypesServices,
    Services
  ],
  actionsEnabled: true,
})

export const servicesCollection = database.get('services');
export const typesServicesCollection = database.get('types_services');