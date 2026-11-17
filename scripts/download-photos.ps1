# Baixa fotos reais (Unsplash) para public/img com validacao de magic bytes JPEG
$ErrorActionPreference = 'Stop'
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

$dest = Join-Path $PSScriptRoot '..\public\img'
$w = 1200
$wp = 900

# mapa: arquivo -> lista de photo IDs candidatos (primeiro que funcionar vence)
$map = [ordered]@{
  'hero-bg.jpg'              = @('photo-1589829545856-d10d557cff95','photo-1505664194779-8beaceb93744')
  'slide-1.jpg'              = @('photo-1521737604893-d14cc237f11d','photo-1521791136064-7986c2920216')
  'slide-2.jpg'              = @('photo-1450101499163-c8848c66ca85','photo-1453227588063-bb302b62f50b')
  'slide-3.jpg'              = @('photo-1600880292203-757bb62b4baf','photo-1543269865-cbf427effbad')
  'about.jpg'                = @('photo-1522071820081-009f0129c71c','photo-1521737604893-d14cc237f11d')
  'area-familia.jpg'         = @('photo-1511895426328-dc8714191300','photo-1609220136736-443140cffec6')
  'area-trabalhista.jpg'     = @('photo-1521791136064-7986c2920216','photo-1541746972996-4e0b0f43e02a')
  'area-criminal.jpg'        = @('photo-1505664194779-8beaceb93744','photo-1589578527966-fdac0f44566c')
  'area-civil-consumidor.jpg'= @('photo-1454165205744-3b78555e5572','photo-1454165804606-c3d57bc86b40')
  'area-empresarial.jpg'     = @('photo-1486406146926-c627a92ad1ab','photo-1497366216548-37526070297c')
  'area-imobiliario.jpg'     = @('photo-1560518883-ce09059eeffa','photo-1568605114967-8130f3a36994')
  'area-previdenciario.jpg'  = @('photo-1469571486292-0ba58a3f068b','photo-1516321318423-f06f85e504b3')
  'area-tributario.jpg'      = @('photo-1554224155-6726b3ff858f','photo-1460925895917-afdab827c52f')
  'area-sucessoes.jpg'       = @('photo-1453227588063-bb302b62f50b','photo-1450101499163-c8848c66ca85')
  'area-medico-saude.jpg'    = @('photo-1576091160399-112ba8d25d1f','photo-1631217868264-e5b90bb7e133')
  'team-1.jpg'               = @('photo-1560250097-0b93528c311a','photo-1507003211169-0a1dd7228f2d')
  'team-2.jpg'               = @('photo-1573496359142-b8d87734a5a2','photo-1494790108377-be9c29b29330')
  'team-3.jpg'               = @('photo-1566492031773-4f4e44671857','photo-1472099645785-5658abf4ff4e')
  'team-4.jpg'               = @('photo-1580489954726-35225931a11a','photo-1544005313-94ddf0286df2')
  'review-1.jpg'             = @('photo-1507003211169-0a1dd7228f2d','photo-1500648767791-00dcc994a43e')
  'review-2.jpg'             = @('photo-1494790108377-be9c29b29330','photo-1438761681033-6461ffad8d80')
  'review-3.jpg'             = @('photo-1472099645785-5658abf4ff4e','photo-1500648767791-00dcc994a43e')
  'blog-1.jpg'               = @('photo-1493612276216-ee3925520721','photo-1516321318423-f06f85e504b3')
  'blog-2.jpg'               = @('photo-1516321318423-f06f85e504b3','photo-1543269865-cbf427effbad')
  'blog-3.jpg'               = @('photo-1487958449943-2429e8be8625','photo-1486406146926-c627a92ad1ab')
  'blog-4.jpg'               = @('photo-1454165205744-3b78555e5572','photo-1460925895917-afdab827c52f')
  'blog-5.jpg'               = @('photo-1543269865-cbf427effbad','photo-1521737604893-d14cc237f11d')
  'blog-6.jpg'               = @('photo-1573164713988-8665fc963095','photo-1573497491208-6b1acb260507')
}

$ok = @(); $fail = @()
foreach ($k in $map.Keys) {
  $out = Join-Path $dest $k
  $done = $false
  foreach ($id in $map[$k]) {
    $isPortrait = $k -like 'team-*' -or $k -like 'review-*'
    $width = if ($isPortrait) { $wp } else { $w }
    $url = "https://images.unsplash.com/$id`?auto=format&fit=crop&w=$width&q=80"
    try {
      Invoke-WebRequest -Uri $url -OutFile $out -UseBasicParsing -TimeoutSec 30
      $bytes = [System.IO.File]::ReadAllBytes($out)
      if ($bytes.Length -gt 20000 -and $bytes[0] -eq 0xFF -and $bytes[1] -eq 0xD8) {
        $ok += "$k <- $id ($([math]::Round($bytes.Length/1KB)) KB)"
        $done = $true
        break
      }
    } catch { }
  }
  if (-not $done) { $fail += $k }
}
"OK ($($ok.Count)):"; $ok | ForEach-Object { "  $_" }
if ($fail.Count) { "FALHARAM ($($fail.Count)): $($fail -join ', ')" } else { "Todos os downloads validados." }
