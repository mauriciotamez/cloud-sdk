"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TestNestedComplexType_1 = require("./TestNestedComplexType");
var cloud_sdk_core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated since v1.6.0. Use [[TestComplexType.build]] instead.
 */
function createTestComplexType_1(json) {
    return TestComplexType.build(json);
}
exports.createTestComplexType_1 = createTestComplexType_1;
/**
 * TestComplexTypeField
 * @typeparam EntityT Type of the entity the complex type field belongs to.
 */
var TestComplexTypeField = /** @class */ (function (_super) {
    __extends(TestComplexTypeField, _super);
    function TestComplexTypeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TestComplexType.stringProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stringProperty = new cloud_sdk_core_1.ComplexTypeStringPropertyField('StringProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.String');
        /**
         * Representation of the [[TestComplexType.booleanProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.booleanProperty = new cloud_sdk_core_1.ComplexTypeBooleanPropertyField('BooleanProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Boolean');
        /**
         * Representation of the [[TestComplexType.guidProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.guidProperty = new cloud_sdk_core_1.ComplexTypeStringPropertyField('GuidProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Guid');
        /**
         * Representation of the [[TestComplexType.int16Property]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.int16Property = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('Int16Property', _this._entityConstructor, 'A_TestComplexType', 'Edm.Int16');
        /**
         * Representation of the [[TestComplexType.int32Property]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.int32Property = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('Int32Property', _this._entityConstructor, 'A_TestComplexType', 'Edm.Int32');
        /**
         * Representation of the [[TestComplexType.int64Property]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.int64Property = new cloud_sdk_core_1.ComplexTypeBigNumberPropertyField('Int64Property', _this._entityConstructor, 'A_TestComplexType', 'Edm.Int64');
        /**
         * Representation of the [[TestComplexType.decimalProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decimalProperty = new cloud_sdk_core_1.ComplexTypeBigNumberPropertyField('DecimalProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Decimal');
        /**
         * Representation of the [[TestComplexType.singleProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.singleProperty = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('SingleProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Single');
        /**
         * Representation of the [[TestComplexType.doubleProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.doubleProperty = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('DoubleProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Double');
        /**
         * Representation of the [[TestComplexType.floatProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.floatProperty = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('FloatProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Float');
        /**
         * Representation of the [[TestComplexType.timeProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.timeProperty = new cloud_sdk_core_1.ComplexTypeTimePropertyField('TimeProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Time');
        /**
         * Representation of the [[TestComplexType.dateTimeProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateTimeProperty = new cloud_sdk_core_1.ComplexTypeDatePropertyField('DateTimeProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.DateTime');
        /**
         * Representation of the [[TestComplexType.dateTimeOffSetProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateTimeOffSetProperty = new cloud_sdk_core_1.ComplexTypeDatePropertyField('DateTimeOffSetProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TestComplexType.byteProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.byteProperty = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('ByteProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.Byte');
        /**
         * Representation of the [[TestComplexType.sByteProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sByteProperty = new cloud_sdk_core_1.ComplexTypeNumberPropertyField('SByteProperty', _this._entityConstructor, 'A_TestComplexType', 'Edm.SByte');
        /**
         * Representation of the [[TestComplexType.complexTypeProperty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.complexTypeProperty = new TestNestedComplexType_1.TestNestedComplexTypeField('ComplexTypeProperty', _this._entityConstructor, 'A_TestComplexType');
        return _this;
    }
    return TestComplexTypeField;
}(cloud_sdk_core_1.ComplexTypeField));
exports.TestComplexTypeField = TestComplexTypeField;
var TestComplexType;
(function (TestComplexType) {
    function build(json) {
        return cloud_sdk_core_1.createComplexType(json, {
            StringProperty: function (stringProperty) { return ({ stringProperty: cloud_sdk_core_1.edmToTs(stringProperty, 'Edm.String') }); },
            BooleanProperty: function (booleanProperty) { return ({ booleanProperty: cloud_sdk_core_1.edmToTs(booleanProperty, 'Edm.Boolean') }); },
            GuidProperty: function (guidProperty) { return ({ guidProperty: cloud_sdk_core_1.edmToTs(guidProperty, 'Edm.Guid') }); },
            Int16Property: function (int16Property) { return ({ int16Property: cloud_sdk_core_1.edmToTs(int16Property, 'Edm.Int16') }); },
            Int32Property: function (int32Property) { return ({ int32Property: cloud_sdk_core_1.edmToTs(int32Property, 'Edm.Int32') }); },
            Int64Property: function (int64Property) { return ({ int64Property: cloud_sdk_core_1.edmToTs(int64Property, 'Edm.Int64') }); },
            DecimalProperty: function (decimalProperty) { return ({ decimalProperty: cloud_sdk_core_1.edmToTs(decimalProperty, 'Edm.Decimal') }); },
            SingleProperty: function (singleProperty) { return ({ singleProperty: cloud_sdk_core_1.edmToTs(singleProperty, 'Edm.Single') }); },
            DoubleProperty: function (doubleProperty) { return ({ doubleProperty: cloud_sdk_core_1.edmToTs(doubleProperty, 'Edm.Double') }); },
            FloatProperty: function (floatProperty) { return ({ floatProperty: cloud_sdk_core_1.edmToTs(floatProperty, 'Edm.Float') }); },
            TimeProperty: function (timeProperty) { return ({ timeProperty: cloud_sdk_core_1.edmToTs(timeProperty, 'Edm.Time') }); },
            DateTimeProperty: function (dateTimeProperty) { return ({ dateTimeProperty: cloud_sdk_core_1.edmToTs(dateTimeProperty, 'Edm.DateTime') }); },
            DateTimeOffSetProperty: function (dateTimeOffSetProperty) { return ({ dateTimeOffSetProperty: cloud_sdk_core_1.edmToTs(dateTimeOffSetProperty, 'Edm.DateTimeOffset') }); },
            ByteProperty: function (byteProperty) { return ({ byteProperty: cloud_sdk_core_1.edmToTs(byteProperty, 'Edm.Byte') }); },
            SByteProperty: function (sByteProperty) { return ({ sByteProperty: cloud_sdk_core_1.edmToTs(sByteProperty, 'Edm.SByte') }); },
            ComplexTypeProperty: function (complexTypeProperty) { return ({ complexTypeProperty: TestNestedComplexType_1.TestNestedComplexType.build(complexTypeProperty) }); }
        });
    }
    TestComplexType.build = build;
})(TestComplexType = exports.TestComplexType || (exports.TestComplexType = {}));
//# sourceMappingURL=TestComplexType.js.map
