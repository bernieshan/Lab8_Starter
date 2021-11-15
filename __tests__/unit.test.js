// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// Phone Number Tests
test('(858) 534-9255 is phone number', () => {
    expect(functions.isPhoneNumber('(858) 534-9255')).toBe(true);
});

test('(858) 534-9255 is phone number', () => {
    expect(functions.isPhoneNumber('(858) 534-9255')).toBe(true);
});

test('123 456 7890 is NOT phone number', () => {
    expect(functions.isPhoneNumber('123 456 7890')).toBe(false);
});

test('(858) 59255 is NOT phone number', () => {
    expect(functions.isPhoneNumber('(858) 59255')).toBe(false);
});

// Email Tests
test('bshan@ucsd.edu is email', () => {
    expect(functions.isEmail('bshan@ucsd.edu')).toBe(true);
});

test('m1imran@ucsd.edu is email', () => {
    expect(functions.isEmail('m1imran@ucsd.edu')).toBe(true);
});

test('bshanucsd.edu is NOT email', () => {
    expect(functions.isEmail('bshanucsd.edu')).toBe(false);
});

test('google.com@bernie is NOT email', () => {
    expect(functions.isEmail('google.com@bernie')).toBe(false);
});

// Strong Password Tests
test('LOLthisiseasy1 is strong password', () => {
    expect(functions.isStrongPassword('LOLthisiseasy1')).toBe(true);
});

test('CSE110lab8help1 is strong password', () => {
    expect(functions.isStrongPassword('CSE110lab8help1')).toBe(true);
});

test('12345 is NOT strong password', () => {
    expect(functions.isStrongPassword('12345')).toBe(false);
});

test('BERNIESPASSWORDISUNCRACKABLEYOUGUYSWILLNEVERGETME is NOT strong password', () => {
    expect(functions.isStrongPassword('BERNIESPASSWORDISUNCRACKABLEYOUGUYSWILLNEVERGETME')).toBe(false);
});

// isDate Tests
test('07/13/2001 is valid date', () => {
    expect(functions.isDate('07/13/2001')).toBe(true);
});

test('5/6/2007 is valid date', () => {
    expect(functions.isDate('5/6/2007')).toBe(true);
});

test('5/6/07 is NOT valid date', () => {
    expect(functions.isDate('5/6/07')).toBe(false);
});

test('111/23/209 is NOT valid date', () => {
    expect(functions.isDate('111/23/209')).toBe(false);
});

// isHexColor Tests
test('#FA3B21 is valid hex color', () => {
    expect(functions.isHexColor('#FA3B21')).toBe(true);
});

test('#FA2323 is valid hex color', () => {
    expect(functions.isHexColor('#FA2323')).toBe(true);
});

test('FA23233 is NOT valid hex color', () => {
    expect(functions.isHexColor('FA23233')).toBe(false);
});

test('#CSE110 is NOT valid hex color', () => {
    expect(functions.isHexColor('#CSE110')).toBe(false);
});