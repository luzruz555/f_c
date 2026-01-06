export default {
  async fetch(request) {
    const url = new URL(request.url);
    const p = url.searchParams;

    // 파라미터
    const temp = p.get('t') || '-47°C';
    const alert = p.get('a') || '통신 불안정';
    const p1t = p.get('p1t') || '공지사항';
    const p1u = p.get('p1u') || '관리자';
    const p1d = p.get('p1d') || '내용';
    const p2t = p.get('p2t') || '인기글';
    const p2u = p.get('p2u') || '익명';
    const p2d = p.get('p2d') || '내용';
    const p3t = p.get('p3t') || '일반글';
    const p3u = p.get('p3u') || '익명';
    const p3d = p.get('p3d') || '내용';

    const svg = `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg">
<style>text{font-family:monospace}</style>
<rect width="260" height="180" fill="#0d1a2d"/>
<rect x="4" y="4" width="252" height="22" fill="#1a3050"/>
<text x="8" y="18" font-size="10" fill="#7cf" font-weight="bold">FROST:// 생존자네트워크</text>
<text x="210" y="18" font-size="10" fill="#6af">${temp}</text>
<rect x="4" y="30" width="252" height="14" fill="#311"/>
<text x="8" y="40" font-size="7" fill="#f66">⚠ ${alert}</text>
<rect x="4" y="48" width="252" height="30" fill="#1a3050"/>
<text x="8" y="62" font-size="8" fill="#4af">공지</text>
<text x="30" y="62" font-size="8" fill="#def">${p1t}</text>
<text x="8" y="73" font-size="7" fill="#68a">${p1u} · ${p1d}</text>
<rect x="4" y="82" width="252" height="30" fill="#152535"/>
<text x="8" y="96" font-size="8" fill="#a6f">인기</text>
<text x="30" y="96" font-size="8" fill="#bcd">${p2t}</text>
<text x="8" y="107" font-size="7" fill="#68a">${p2u} · ${p2d}</text>
<rect x="4" y="116" width="252" height="30" fill="#12202f"/>
<text x="8" y="130" font-size="8" fill="#9ab">${p3t}</text>
<text x="8" y="141" font-size="7" fill="#68a">${p3u} · ${p3d}</text>
<rect x="4" y="150" width="252" height="26" fill="#081018"/>
<text x="8" y="167" font-size="7" fill="#4a8">》번호로 상세보기 | !글쓰기</text>
</svg>`;

    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache'
      }
    });
  }
};
