// IMPORT MODULES under test here:
import {
  greetUsers,
  greetUsersOverAge60,
  addAllAges,
  getAverageCoolFactor,
  getTotalOfEachGender,
  getGenderBreakdownOfFordOwners,
  getGenderBreakdownOfEachCar,
  getAllCoolFactorsOfEachCar,
} from "../functions.js";
import customers from "./data.js";

const { test, skip } = QUnit;

test("greetUsers", (expect) => {
  const expected = true;

  const actual = greetUsers(customers);

  expect.equal(actual, expected);
});

test("greetUsersOverAge60", (expect) => {
  const expected = [
    "Hello Suzi Summerson!",
    "Hello Boot Penton!",
    "Hello Cacilia Caramuscia!",
    "Hello Cristal Oakman!",
    "Hello Kenny Kepe!",
    "Hello Dimitri Ochiltree!",
    "Hello Ilaire O'Codihie!",
    "Hello Anatol Gulley!",
    "Hello Salomone Merkle!",
    "Hello Alta Sulter!",
    "Hello Alexandros Cornell!",
    "Hello Thorn McMeekin!",
    "Hello Esmaria Moukes!",
    "Hello Munroe Walthall!",
    "Hello Tannie Sedman!",
  ];

  const actual = greetUsersOverAge60(customers);

  expect.deepEqual(actual, expected);
});

test("addAllAges", (expect) => {
  const expected = 2125;

  const actual = addAllAges(customers);

  expect.deepEqual(actual, expected);
});

test("getAverageCoolFactor", (expect) => {
  const expected = 5.088888888888889;

  const actual = getAverageCoolFactor(customers);

  expect.deepEqual(actual, expected);
});

test("getTotalOfEachGender", (expect) => {
  const expected = {
    Bigender: 1,
    Female: 19,
    Genderqueer: 1,
    Male: 23,
    "Non-binary": 1,
  };

  const actual = getTotalOfEachGender(customers);

  expect.deepEqual(actual, expected);
});

test("getGenderBreakdownOfFordOwners", (expect) => {
  const expected = {
    Female: 1,
    Male: 2,
  };

  const actual = getGenderBreakdownOfFordOwners(customers);

  expect.deepEqual(actual, expected);
});

skip("getGenderBreakdownOfEachCar", (expect) => {
  const expected = false;

  const actual = getGenderBreakdownOfEachCar(customers);

  expect.deepEqual(actual, expected);
});

skip("getAllCoolFactorsOfEachCar", (expect) => {
  const expected = false;

  const actual = getAllCoolFactorsOfEachCar(customers);

  expect.deepEqual(actual, expected);
});
/////////////////////////////////////////
skip("getAverageCoolFactorOfEachCar", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactor", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getCoolFactorsByAgeBracket", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});

skip("getAverageCoolFactorByAgeBracket", (expect) => {
  const expected = true;

  const actual = true;

  expect.equal(actual, expected);
});
