// ─────────────────────────────────────────
// PRACTICE PROBLEMS
// ─────────────────────────────────────────
// Each entry: PROBLEMS['vXXX'] = function() { return { q, a, type } }
// type: 'calc'  → number input, auto-checked (a must be a number)
// type: 'self'  → reveal answer, self-check

const PROBLEMS = {};

// ── helpers ──
function ri(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
function rc(arr)  { return arr[Math.floor(Math.random() * arr.length)]; }

// ── v001: マイナスとは？ ──
PROBLEMS['v001'] = function() {
  return rc([
    // 反対の数（正→負）
    function() {
      const n = ri(1, 9);
      return { q: `+${n} の反対の数（反数）は？`, a: -n, type: 'calc' };
    },
    // 反対の数（負→正）
    function() {
      const n = ri(1, 9);
      return { q: `-${n} の反対の数（反数）は？`, a: n, type: 'calc' };
    },
    // 絶対値（負の数）
    function() {
      const n = ri(1, 9);
      return { q: `|-${n}| の絶対値は？`, a: n, type: 'calc' };
    },
    // 絶対値（正の数）
    function() {
      const n = ri(1, 9);
      return { q: `|+${n}| の絶対値は？`, a: n, type: 'calc' };
    },
    // 大小比較（どちらが大きい？）
    function() {
      const a = -ri(1, 4);
      const b = -ri(5, 9);
      return { q: `${a} と ${b} では、どちらが大きい？（数字で答えよ）`, a: a, type: 'calc' };
    },
    // 概念確認（自己採点）
    function() {
      return {
        q: '数直線上で、0 より左側にある数を何といいますか？',
        a: '負の数（マイナスの数）',
        type: 'self',
      };
    },
    // 概念確認（自己採点）
    function() {
      return {
        q: '「絶対値」とは何ですか？',
        a: '数直線上で 0 からの距離（符号を取り除いた数）',
        type: 'self',
      };
    },
  ])();
};
