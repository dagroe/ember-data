/**
  @module @ember-data/serializer
*/

/**
  The `StringTransform` class is used to serialize and deserialize
  string attributes on Ember Data record objects. This transform is
  used when `string` is passed as the type parameter to the
  [attr](/ember-data/release/functions/@ember-data%2Fmodel/attr) function.

  Usage

  ```app/models/user.js
  import Model, { attr, belongsTo } from '@ember-data/model';

  export default class UserModel extends Model {
    @attr('boolean') isAdmin;
    @attr('string') name;
    @attr('string') email;
  }
  ```

  @class StringTransform
  @public
 */
export default class StringTransform {
  deserialize(serialized) {
    return !serialized && serialized !== '' ? null : String(serialized);
  }
  serialize(deserialized) {
    return !deserialized && deserialized !== '' ? null : String(deserialized);
  }

  static create() {
    return new this();
  }
}
