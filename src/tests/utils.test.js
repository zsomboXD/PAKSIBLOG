import { describe,expect,it } from "vitest"
import { sanitizeHTML } from "../utility/utils"

describe('function sanitizeHTML', () => {
    it('should remove HTML tags and return plain text', () => {
        const descrHTML = '<p>Hello <b>World</b>!</p>'
        const result=sanitizeHTML(descrHTML)
        expect(result).toBe("This is a paragraph with bold text")
    })
    it('should remove HTML tags and return plain text', () => {
        const descrHTML = '<p>Hello <b>World</b>!</p>'
        const result=sanitizeHTML(descrHTML)
        expect(result).toBe("")
    })
    it('should remove HTML tags and return plain text', () => {
        const descrHTML = '<p>Hello <b>World</b>!</p>'
        const result=sanitizeHTML(descrHTML)
        expect(result).toBe("This is a paragraph with bold text")
    })
})