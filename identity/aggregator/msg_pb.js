// source: msg.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require("google-protobuf");
var goog = jspb;
var global = Function("return this")();

goog.exportSymbol("proto.MsgProto", null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MsgProto = function (opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MsgProto, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MsgProto.displayName = "proto.MsgProto";
}

if (jspb.Message.GENERATE_TO_OBJECT) {
  /**
   * Creates an object representation of this proto.
   * Field names that are reserved in JavaScript and will be renamed to pb_name.
   * Optional fields that are not set will be set to undefined.
   * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
   * For the list of reserved names please see:
   *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
   * @param {boolean=} opt_includeInstance Deprecated. whether to include the
   *     JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @return {!Object}
   */
  proto.MsgProto.prototype.toObject = function (opt_includeInstance) {
    return proto.MsgProto.toObject(opt_includeInstance, this);
  };

  /**
   * Static version of the {@see toObject} method.
   * @param {boolean|undefined} includeInstance Deprecated. Whether to include
   *     the JSPB instance for transitional soy proto support:
   *     http://goto/soy-param-migration
   * @param {!proto.MsgProto} msg The msg instance to transform.
   * @return {!Object}
   * @suppress {unusedLocalVariables} f is only used for nested messages
   */
  proto.MsgProto.toObject = function (includeInstance, msg) {
    var f,
      obj = {
        sequence: jspb.Message.getFieldWithDefault(msg, 1, 0),
        subject: jspb.Message.getFieldWithDefault(msg, 2, ""),
        reply: jspb.Message.getFieldWithDefault(msg, 3, ""),
        data: msg.getData_asB64(),
        timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
        redelivered: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
        redeliveryCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
        crc32: jspb.Message.getFieldWithDefault(msg, 10, 0),
      };

    if (includeInstance) {
      obj.$jspbMessageInstance = msg;
    }
    return obj;
  };
}

/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MsgProto}
 */
proto.MsgProto.deserializeBinary = function (bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MsgProto();
  return proto.MsgProto.deserializeBinaryFromReader(msg, reader);
};

/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MsgProto} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MsgProto}
 */
proto.MsgProto.deserializeBinaryFromReader = function (msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
      case 1:
        var value = /** @type {number} */ (reader.readUint64());
        msg.setSequence(value);
        break;
      case 2:
        var value = /** @type {string} */ (reader.readString());
        msg.setSubject(value);
        break;
      case 3:
        var value = /** @type {string} */ (reader.readString());
        msg.setReply(value);
        break;
      case 4:
        var value = /** @type {!Uint8Array} */ (reader.readBytes());
        msg.setData(value);
        break;
      case 5:
        var value = /** @type {number} */ (reader.readInt64());
        msg.setTimestamp(value);
        break;
      case 6:
        var value = /** @type {boolean} */ (reader.readBool());
        msg.setRedelivered(value);
        break;
      case 7:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setRedeliveryCount(value);
        break;
      case 10:
        var value = /** @type {number} */ (reader.readUint32());
        msg.setCrc32(value);
        break;
      default:
        reader.skipField();
        break;
    }
  }
  return msg;
};

/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MsgProto.prototype.serializeBinary = function () {
  var writer = new jspb.BinaryWriter();
  proto.MsgProto.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};

/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MsgProto} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MsgProto.serializeBinaryToWriter = function (message, writer) {
  var f = undefined;
  f = message.getSequence();
  if (f !== 0) {
    writer.writeUint64(1, f);
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(2, f);
  }
  f = message.getReply();
  if (f.length > 0) {
    writer.writeString(3, f);
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(4, f);
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(5, f);
  }
  f = message.getRedelivered();
  if (f) {
    writer.writeBool(6, f);
  }
  f = message.getRedeliveryCount();
  if (f !== 0) {
    writer.writeUint32(7, f);
  }
  f = message.getCrc32();
  if (f !== 0) {
    writer.writeUint32(10, f);
  }
};

/**
 * optional uint64 sequence = 1;
 * @return {number}
 */
proto.MsgProto.prototype.getSequence = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};

/**
 * @param {number} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setSequence = function (value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};

/**
 * optional string subject = 2;
 * @return {string}
 */
proto.MsgProto.prototype.getSubject = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};

/**
 * @param {string} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setSubject = function (value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};

/**
 * optional string reply = 3;
 * @return {string}
 */
proto.MsgProto.prototype.getReply = function () {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};

/**
 * @param {string} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setReply = function (value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};

/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.MsgProto.prototype.getData = function () {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(
    this,
    4,
    "",
  ));
};

/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.MsgProto.prototype.getData_asB64 = function () {
  return /** @type {string} */ (jspb.Message.bytesAsB64(this.getData()));
};

/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.MsgProto.prototype.getData_asU8 = function () {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(this.getData()));
};

/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setData = function (value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};

/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.MsgProto.prototype.getTimestamp = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};

/**
 * @param {number} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setTimestamp = function (value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};

/**
 * optional bool redelivered = 6;
 * @return {boolean}
 */
proto.MsgProto.prototype.getRedelivered = function () {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(
    this,
    6,
    false,
  ));
};

/**
 * @param {boolean} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setRedelivered = function (value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};

/**
 * optional uint32 redelivery_count = 7;
 * @return {number}
 */
proto.MsgProto.prototype.getRedeliveryCount = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};

/**
 * @param {number} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setRedeliveryCount = function (value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};

/**
 * optional uint32 CRC32 = 10;
 * @return {number}
 */
proto.MsgProto.prototype.getCrc32 = function () {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};

/**
 * @param {number} value
 * @return {!proto.MsgProto} returns this
 */
proto.MsgProto.prototype.setCrc32 = function (value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};

goog.object.extend(exports, proto);
