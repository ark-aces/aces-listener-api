<?php
/**
 * SubscriptionRequest
 *
 * PHP version 5
 *
 * @category Class
 * @package  ArkAces\AcesListenerApi
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */

/**
 * ACES Listener API
 *
 * API Specification for ACES Listeners that read data on a blockchain and forward transaction events to registered subscribers.
 *
 * OpenAPI spec version: 1.1.0
 * 
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 */

/**
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen
 * Do not edit the class manually.
 */

namespace ArkAces\AcesListenerApi\Model;

use \ArrayAccess;
use \ArkAces\AcesListenerApi\ObjectSerializer;

/**
 * SubscriptionRequest Class Doc Comment
 *
 * @category Class
 * @package  ArkAces\AcesListenerApi
 * @author   Swagger Codegen team
 * @link     https://github.com/swagger-api/swagger-codegen
 */
class SubscriptionRequest implements ModelInterface, ArrayAccess
{
    const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static $swaggerModelName = 'SubscriptionRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerTypes = [
        'callbackUrl' => 'string',
        'minConfirmations' => 'int',
        'recipientAddress' => 'string'
    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static $swaggerFormats = [
        'callbackUrl' => null,
        'minConfirmations' => null,
        'recipientAddress' => null
    ];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerTypes()
    {
        return self::$swaggerTypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function swaggerFormats()
    {
        return self::$swaggerFormats;
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static $attributeMap = [
        'callbackUrl' => 'callbackUrl',
        'minConfirmations' => 'minConfirmations',
        'recipientAddress' => 'recipientAddress'
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static $setters = [
        'callbackUrl' => 'setCallbackUrl',
        'minConfirmations' => 'setMinConfirmations',
        'recipientAddress' => 'setRecipientAddress'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static $getters = [
        'callbackUrl' => 'getCallbackUrl',
        'minConfirmations' => 'getMinConfirmations',
        'recipientAddress' => 'getRecipientAddress'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap()
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters()
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters()
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName()
    {
        return self::$swaggerModelName;
    }

    

    

    /**
     * Associative array for storing property values
     *
     * @var mixed[]
     */
    protected $container = [];

    /**
     * Constructor
     *
     * @param mixed[] $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(array $data = null)
    {
        $this->container['callbackUrl'] = isset($data['callbackUrl']) ? $data['callbackUrl'] : null;
        $this->container['minConfirmations'] = isset($data['minConfirmations']) ? $data['minConfirmations'] : null;
        $this->container['recipientAddress'] = isset($data['recipientAddress']) ? $data['recipientAddress'] : null;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties()
    {
        $invalidProperties = [];

        if ($this->container['callbackUrl'] === null) {
            $invalidProperties[] = "'callbackUrl' can't be null";
        }
        if ($this->container['minConfirmations'] === null) {
            $invalidProperties[] = "'minConfirmations' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid()
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets callbackUrl
     *
     * @return string
     */
    public function getCallbackUrl()
    {
        return $this->container['callbackUrl'];
    }

    /**
     * Sets callbackUrl
     *
     * @param string $callbackUrl Target target URL to POST Encoded Listener events to.
     *
     * @return $this
     */
    public function setCallbackUrl($callbackUrl)
    {
        $this->container['callbackUrl'] = $callbackUrl;

        return $this;
    }

    /**
     * Gets minConfirmations
     *
     * @return int
     */
    public function getMinConfirmations()
    {
        return $this->container['minConfirmations'];
    }

    /**
     * Sets minConfirmations
     *
     * @param int $minConfirmations Confirmations required before event is sent to subscriber.
     *
     * @return $this
     */
    public function setMinConfirmations($minConfirmations)
    {
        $this->container['minConfirmations'] = $minConfirmations;

        return $this;
    }

    /**
     * Gets recipientAddress
     *
     * @return string
     */
    public function getRecipientAddress()
    {
        return $this->container['recipientAddress'];
    }

    /**
     * Sets recipientAddress
     *
     * @param string $recipientAddress recipientAddress
     *
     * @return $this
     */
    public function setRecipientAddress($recipientAddress)
    {
        $this->container['recipientAddress'] = $recipientAddress;

        return $this;
    }
    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset)
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed
     */
    public function offsetGet($offset)
    {
        return isset($this->container[$offset]) ? $this->container[$offset] : null;
    }

    /**
     * Sets value based on offset.
     *
     * @param integer $offset Offset
     * @param mixed   $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, $value)
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset)
    {
        unset($this->container[$offset]);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        if (defined('JSON_PRETTY_PRINT')) { // use JSON pretty print
            return json_encode(
                ObjectSerializer::sanitizeForSerialization($this),
                JSON_PRETTY_PRINT
            );
        }

        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


