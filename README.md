# Theater Arts Production Suite

Wave:
- Portfolio next-20 completion batch

Source candidates represented:
- `AITheaterArtsProductionAssistant`
- `AITheaterArtsProductionOperations`
- `AITheaterArtsProductionAnalytics`
- `AITheaterArtsProductionWorkflow`

This suite is a runnable merged app with one login, one dashboard, one feature-first sidebar, PostgreSQL-backed records/documents/notifications/audit, role behavior, and smoke coverage.

## Local Run

```bash
cd /Users/erolakarsu/projects/merged/theater-arts-production-suite
./start.sh
```

Local URL:
- `http://127.0.0.1:5190`

Seeded users:
- `admin@theater-arts-production.local / admin123`
- `manager@theater-arts-production.local / manager123`
- `analyst@theater-arts-production.local / analyst123`

## Validation

```bash
cd /Users/erolakarsu/projects/merged/theater-arts-production-suite/frontend
npm run typecheck
SMOKE_BASE_URL=http://127.0.0.1:5190 npm run smoke
```
