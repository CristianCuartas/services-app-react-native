import {Model} from '@nozbe/watermelondb';
import { date, field, relation } from '@nozbe/watermelondb/decorators';

export default class TypesServices extends Model {
  static table = 'types_services';
  static associations = {
    services: {type: 'belongs_to', key: 'service_id'},
  };
  @field('name') name
  @field('price') price
  @date('created_at') createdAt
}
