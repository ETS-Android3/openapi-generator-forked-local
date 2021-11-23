//
// ArrayOfNumberOnly.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

internal struct ArrayOfNumberOnly: Codable, Hashable {

    internal var arrayNumber: [Double]?

    internal init(arrayNumber: [Double]? = nil) {
        self.arrayNumber = arrayNumber
    }

    internal enum CodingKeys: String, CodingKey, CaseIterable {
        case arrayNumber = "ArrayNumber"
    }

    // Encodable protocol methods

    internal func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(arrayNumber, forKey: .arrayNumber)
    }
}

