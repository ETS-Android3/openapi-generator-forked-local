/**
* OpenAPI Petstore
* This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
*
* The version of the OpenAPI document: 1.0.0
* 
*
* NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
* https://openapi-generator.tech
* Do not edit the class manually.
*/
package org.openapitools.client.models


import com.google.gson.annotations.SerializedName
import java.io.Serializable

/**
 * 
 * @param mapMapOfString 
 * @param mapOfEnumString 
 * @param directMap 
 * @param indirectMap 
 */

data class MapTest (
    @SerializedName("map_map_of_string")
    val mapMapOfString: kotlin.collections.Map<kotlin.String, kotlin.collections.Map<kotlin.String, kotlin.String>>? = null,
    @SerializedName("map_of_enum_string")
    val mapOfEnumString: MapTest.MapOfEnumString? = null,
    @SerializedName("direct_map")
    val directMap: kotlin.collections.Map<kotlin.String, kotlin.Boolean>? = null,
    @SerializedName("indirect_map")
    val indirectMap: kotlin.collections.Map<kotlin.String, kotlin.Boolean>? = null
) : Serializable {
    companion object {
        private const val serialVersionUID: Long = 123
    }

    /**
    * 
    * Values: uPPER,lower
    */
    
    enum class MapOfEnumString(val value: kotlin.String){
        @SerializedName(value = "UPPER") uPPER("UPPER"),
        @SerializedName(value = "lower") lower("lower");
    }
}

