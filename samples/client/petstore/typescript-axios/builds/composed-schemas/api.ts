/* tslint:disable */
/* eslint-disable */
/**
 * Example
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface Cat
 */
export interface Cat {
    /**
     * 
     * @type {boolean}
     * @memberof Cat
     */
    'hunts'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof Cat
     */
    'age'?: number;
}
/**
 * 
 * @export
 * @interface CatAllOf
 */
export interface CatAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof CatAllOf
     */
    'hunts'?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CatAllOf
     */
    'age'?: number;
}
/**
 * 
 * @export
 * @interface Dog
 */
export interface Dog {
    /**
     * 
     * @type {boolean}
     * @memberof Dog
     */
    'bark'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Dog
     */
    'breed'?: DogBreedEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum DogBreedEnum {
    Dingo = 'Dingo',
    Husky = 'Husky',
    Retriever = 'Retriever',
    Shepherd = 'Shepherd'
}

/**
 * 
 * @export
 * @interface DogAllOf
 */
export interface DogAllOf {
    /**
     * 
     * @type {boolean}
     * @memberof DogAllOf
     */
    'bark'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DogAllOf
     */
    'breed'?: DogAllOfBreedEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum DogAllOfBreedEnum {
    Dingo = 'Dingo',
    Husky = 'Husky',
    Retriever = 'Retriever',
    Shepherd = 'Shepherd'
}

/**
 * 
 * @export
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     * 
     * @type {any}
     * @memberof InlineObject
     */
    'file'?: any;
}
/**
 * 
 * @export
 * @interface PetByAge
 */
export interface PetByAge {
    /**
     * 
     * @type {number}
     * @memberof PetByAge
     */
    'age': number;
    /**
     * 
     * @type {string}
     * @memberof PetByAge
     */
    'nickname'?: string;
}
/**
 * 
 * @export
 * @interface PetByType
 */
export interface PetByType {
    /**
     * 
     * @type {string}
     * @memberof PetByType
     */
    'pet_type': PetByTypePetTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof PetByType
     */
    'hunts'?: boolean;
}

/**
    * @export
    * @enum {string}
    */
export enum PetByTypePetTypeEnum {
    Cat = 'Cat',
    Dog = 'Dog'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filePost: async (inlineObject?: InlineObject, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/file`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(inlineObject, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {PetByAge | PetByType} [petByAgePetByType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsFilteredPatch: async (petByAgePetByType?: PetByAge | PetByType, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pets-filtered`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(petByAgePetByType, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {Cat | Dog} [catDog] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsPatch: async (catDog?: Cat | Dog, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/pets`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(catDog, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async filePost(inlineObject?: InlineObject, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.filePost(inlineObject, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {PetByAge | PetByType} [petByAgePetByType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async petsFilteredPatch(petByAgePetByType?: PetByAge | PetByType, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.petsFilteredPatch(petByAgePetByType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {Cat | Dog} [catDog] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async petsPatch(catDog?: Cat | Dog, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.petsPatch(catDog, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {InlineObject} [inlineObject] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        filePost(inlineObject?: InlineObject, options?: any): AxiosPromise<void> {
            return localVarFp.filePost(inlineObject, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {PetByAge | PetByType} [petByAgePetByType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsFilteredPatch(petByAgePetByType?: PetByAge | PetByType, options?: any): AxiosPromise<void> {
            return localVarFp.petsFilteredPatch(petByAgePetByType, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {Cat | Dog} [catDog] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        petsPatch(catDog?: Cat | Dog, options?: any): AxiosPromise<void> {
            return localVarFp.petsPatch(catDog, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {InlineObject} [inlineObject] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public filePost(inlineObject?: InlineObject, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).filePost(inlineObject, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {PetByAge | PetByType} [petByAgePetByType] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public petsFilteredPatch(petByAgePetByType?: PetByAge | PetByType, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).petsFilteredPatch(petByAgePetByType, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {Cat | Dog} [catDog] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public petsPatch(catDog?: Cat | Dog, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).petsPatch(catDog, options).then((request) => request(this.axios, this.basePath));
    }
}


