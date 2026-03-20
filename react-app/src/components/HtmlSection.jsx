import { useMemo } from 'react'

function HtmlSection({ html }) {
  const optimizedHtml = useMemo(() => {
    if (!html) return null
    return html.replace(/<img\b/g, '<img loading="lazy" decoding="async"')
  }, [html])

  if (!optimizedHtml) return null
  return <div dangerouslySetInnerHTML={{ __html: optimizedHtml }} />
}

export default HtmlSection
