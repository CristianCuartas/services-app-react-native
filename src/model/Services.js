import {Model} from '@nozbe/watermelondb';
import { children, date, field } from '@nozbe/watermelondb/decorators'

export default class Services extends Model {
  static table = 'services';
  static associations = {
    types_services: {type: 'has_many', key: 'service_id'},
  }
  @field('name') name
  @date('created_at') createdAt
  
  @children('types_services') types_services
}
