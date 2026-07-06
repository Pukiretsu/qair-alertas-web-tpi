const commentsApiUrl = import.meta.env.VITE_COMMENTS_API_URL;

export async function submitComment(payload) {
  const comment = {
    commentId: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...payload,
  };

  if (!commentsApiUrl) {
    const stored = JSON.parse(localStorage.getItem('qair-comments') || '[]');
    localStorage.setItem('qair-comments', JSON.stringify([comment, ...stored].slice(0, 25)));
    return { mode: 'local-demo', comment };
  }

  const response = await fetch(commentsApiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  });

  if (!response.ok) {
    throw new Error('No fue posible registrar el comentario. Intenta nuevamente.');
  }

  return { mode: 'api', comment };
}
