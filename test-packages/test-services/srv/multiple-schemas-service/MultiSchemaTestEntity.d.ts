/*!
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
import { MultiSchemaTestEntityRequestBuilder } from './MultiSchemaTestEntityRequestBuilder';
/**
 * This class represents the entity "MultiSchemaTestEntity" of service "SCHEMA_DATA".
 */
export declare class MultiSchemaTestEntity extends Entity implements MultiSchemaTestEntityType {
  /**
   * Technical entity name for MultiSchemaTestEntity.
   */
  static _entityName: string;
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MultiSchemaTestEntity.
   */
  static _serviceName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * Key Property.
   */
  keyProperty: string;
  /**
   * Returns an entity builder to construct instances `MultiSchemaTestEntity`.
   * @returns A builder that constructs instances of entity type `MultiSchemaTestEntity`.
   */
  static builder(): EntityBuilderType<MultiSchemaTestEntity, MultiSchemaTestEntityTypeForceMandatory>;
  /**
   * Returns a request builder to construct requests for operations on the `MultiSchemaTestEntity` entity type.
   * @returns A `MultiSchemaTestEntity` request builder.
   */
  static requestBuilder(): MultiSchemaTestEntityRequestBuilder;
  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MultiSchemaTestEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MultiSchemaTestEntity`.
   */
  static customField(fieldName: string): CustomField<MultiSchemaTestEntity>;
  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): {
    [key: string]: any;
  };
}
export interface MultiSchemaTestEntityType {
  keyProperty: string;
}
export interface MultiSchemaTestEntityTypeForceMandatory {
  keyProperty: string;
}
export declare namespace MultiSchemaTestEntity {
  /**
   * Static representation of the [[keyProperty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  const KEY_PROPERTY: StringField<MultiSchemaTestEntity>;
  /**
   * All fields of the MultiSchemaTestEntity entity.
   */
  const _allFields: Array<StringField<MultiSchemaTestEntity>>;
  /**
   * All fields selector.
   */
  const ALL_FIELDS: AllFields<MultiSchemaTestEntity>;
  /**
   * All key fields of the MultiSchemaTestEntity entity.
   */
  const _keyFields: Array<Selectable<MultiSchemaTestEntity>>;
  /**
   * Mapping of all key field names to the respective static field property MultiSchemaTestEntity.
   */
  const _keys: {
    [keys: string]: Selectable<MultiSchemaTestEntity>;
  };
}
//# sourceMappingURL=MultiSchemaTestEntity.d.ts.map
