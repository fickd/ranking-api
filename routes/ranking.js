const express = require("express");
const router = express.Router();
const db = require("../db");

// 오늘 날짜 기준 모든 사이트 랭킹 조회
router.get("/today", async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT s.site_name, r.ranking_source, r.ranking_position, r.crawled_at
      FROM rankings r
      JOIN sites s ON s.id = r.site_id
      WHERE DATE(r.crawled_at) = CURDATE()
      ORDER BY r.ranking_position ASC
    `);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("서버 오류");
  }
});

module.exports = router;
