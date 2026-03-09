const express = require('express');
const router = express.Router();

// 전체 사용자 조회
router.get('/', (req, res) => {
  res.json({ message: '전체 사용자 목록' });
});

// 특정 사용자 조회
router.get('/:id', (req, res) => {
  res.json({ message: `사용자 ${req.params.id} 조회` });
});

// 사용자 생성
router.post('/', (req, res) => {
  res.json({ message: '사용자 생성', data: req.body });
});

// 사용자 수정
router.put('/:id', (req, res) => {
  res.json({ message: `사용자 ${req.params.id} 수정`, data: req.body });
});

// 사용자 삭제
router.delete('/:id', (req, res) => {
  res.json({ message: `사용자 ${req.params.id} 삭제` });
});

module.exports = router;
