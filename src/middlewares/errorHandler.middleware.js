function errorHandler(err, req, res, next) {
  let statusCode = 500;  // 기본 상태 코드는 500 (서버 오류)
  let message = '서버 에러입니다';  // 기본 오류 메시지
  let code = 'INTERNAL_ERROR';  // 기본 오류 코드

  // Prisma 오류 코드 처리
  if (err.code === 'P2002') {
    statusCode = 400;
    message = `${err.meta.target}는 이미 존재합니다. 다른 값을 사용하세요.`;
    code = 'P2002_DUPLICATE';
  } else if (err.code === 'P2005') {
    message = `NULL 값을 사용할 수 없습니다.`;
    code = 'P2005_NULL_CONSTRAINT';
  } else if (err.code === 'P2025') {
    statusCode = 404;
    message = `데이터를 찾을 수 없습니다.`;
    code = 'P2025_NOT_FOUND';
  } else {
    message = err.message || message;
  }

  // 서버 로그에 에러 출력 (디버깅 용)
  console.error(err);

  // 에러 응답 포맷 통일
  const errorResponse = {
    success: false,
    message,
    code, // 오류 코드 추가
    ...(req.headers['x-request-id'] && { requestId: req.headers['x-request-id'] }), // 요청 ID 추가 (있을 경우)
  };

  res.status(statusCode).json(errorResponse);
}

module.exports = errorHandler;
