import Utils from "./Utils";

describe("Utils", () => {
  describe("truncate()", () => {
    it("Nontruncated", () => {
      const actual = Utils.truncate("Nontruncated", 12);
      const expected = "Nontruncated";
      expect(actual).toBe(expected);
    });
    it("Truncated", () => {
      const actual = Utils.truncate("Nontruncated", 9);
      const expected = "Nontrunca...";
      expect(actual).toBe(expected);
    });
  });
});
