function errorHandler(err, req, res, next) {
  let statusCode = 500;  // 기본 상태 코드는 500 (서버 오류)
  let message = '서버 에러입니다';  // 기본 오류 메시지

  // P2002: DB가 고유값으로 지정되어 있는데 중복됨
  if (err.code === 'P2002') {
    statusCode = 400;
    message = `${err.meta.target}는 이미 존재합니다. 다른 값을 사용하세요.`;
  }
  // P2005: NULL 제약(필드에 빈 값이 들어가면 안됨)
  else if (err.code === 'P2005') {
    message = `NULL 값을 사용할 수 없습니다.`
  }
  // P2025: DB에 ID가 없을 때
  else if (err.code === 'P2025') {
    statusCode = 404;
    message = `데이터를 찾을 수 없습니다.`;
  }
  // 다른 오류 처리
  else {
    message = err.message || message;
  }

  // 에러 발생 시 서버 로그에 출력 (디버깅 용)
  console.error(err);

  // 클라이언트에게 오류 응답 전송
  const errorResponse = {
    message,
    // 개발 환경에서는 stack trace를 포함시켜서 디버깅 정보를 제공
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  };

  res.status(statusCode).json(errorResponse);
}

module.exports = errorHandler;
